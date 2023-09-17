import axios from 'axios';
import { Helpers } from '../helpers/Helpers';
import { CreateClientRequest } from '../models/request/securitymanagement/create-client-request';
import { DeleteClientRequest } from '../models/request/securitymanagement/delete-client-request';
import { ChangePasswordRequest } from '../models/request/securitymanagement/change-password-request';
import { ForgotPasswordRequest } from '../models/request/securitymanagement/forgot-password-request';
import ExpireStorage from '../helpers/ExpireStorage';
import { GetTokenResponse } from '../models/response/securitymanagement/get-token-response';

export class SecurityManagementService {

    static async GetToken() {
        try {
            const { grant_type, client_id, client_secret, scope } = Helpers.getConstants();

            let config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            var inputObj = {
                grant_type: grant_type,
                client_id: client_id,
                client_secret: client_secret,
                scope: scope
            }

            //console.log('SERVICE CALL - SignIn', JSON.stringify(inputObj));

            const resp = await axios.post(`https://auth.lookupdatas.com/connect/token`, inputObj, config);

            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }

    static async Register(_userName: string, _email: string, _password: string, _phoneNumber: string) {
        try {
            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();

            var inputObj = {
                userName: _userName,
                email: _email,
                password: _password,
                phoneNumber: _phoneNumber
            }

            // - Register', JSON.stringify(inputObj));

            const resp = await axios.post(`${BASE_URL}/${securitymanagement}/api/authorize/register`, inputObj);

            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }

    static async SignIn(_userName: string, _password: string) {
        try {
            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();

            var inputObj = {
                userName: _userName,
                password: _password
            }

            //console.log('SERVICE CALL - SignIn', JSON.stringify(inputObj));

            const resp = await axios.post(`${BASE_URL}/${securitymanagement}/api/authorize/signin`, inputObj);

            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }

    static async GetUserByUserName(_userName: string) {
        try {
            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();
            const resp = await axios.get(`${BASE_URL}/${securitymanagement}/api/aspnetuser/getbyusername?UserName=` + _userName);

            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }

    static async GetApiScopes() {
        try {
            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();
            const resp = await axios.get(`${BASE_URL}/${securitymanagement}/api/api/apiscopes`);

            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }

    static async CreateClient(createClientRequest: CreateClientRequest) {
        try {
            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();
            const resp = await axios.post(`${BASE_URL}/${securitymanagement}/api/client`, createClientRequest);

            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }

    static async DeleteClient(deleteClientRequest: DeleteClientRequest) {
        try {
            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();
            const resp = await axios.delete(`${BASE_URL}/${securitymanagement}/api/client`, { data: deleteClientRequest });
            
            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }

    static async GetClientByClientId(_clientId: string | any) {
        try {
            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();
            const resp = await axios.get(`${BASE_URL}/${securitymanagement}/api/client/getclientbyclientid?ClientId=` + _clientId);

            return Helpers.dataParser(resp);
        } catch (error) {
            return null;
        }
    }

    static async ConfirmAccount(_code: string | any) {
        try {
            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();
            const resp = await axios.post(`${BASE_URL}/${securitymanagement}/api/authorize/confirm/` + _code);

            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }

    static async ForgotPassword(forgotPasswordRequest: ForgotPasswordRequest) {
        try {
            var token = await ExpireStorage.getItem(Helpers.getStorageKeys()[1]);
            if (!token) {
                var getTokenResponse: GetTokenResponse = await this.GetToken();
                var access_token = getTokenResponse.access_token;
                var expiryInMinutes = getTokenResponse.expires_in;
                await ExpireStorage.setItem(Helpers.getStorageKeys()[1], access_token, expiryInMinutes);
            }

            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();
            const resp = await axios.post(`${BASE_URL}/${securitymanagement}/api/aspnetuser/forgotpassword`, forgotPasswordRequest);

            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }

    static async ChangePassword(changePasswordRequest: ChangePasswordRequest) {
        try {
            const { BASE_URL, securitymanagement } = Helpers.getEndpoint();
            const resp = await axios.post(`${BASE_URL}/${securitymanagement}/api/aspnetuser/changepassword`, changePasswordRequest);

            return Helpers.dataParser(resp);
        } catch (error) {
            throw Helpers.parseErrorMessage(error);
        }
    }
}