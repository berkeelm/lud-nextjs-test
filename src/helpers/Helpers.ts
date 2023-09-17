// import { MainError } from "../models/main-error";
// import { authSlice } from "../redux/reducers/authSlice";

// import { ConnectErrorModel } from "../models/ConnectErrorModel";
// import { ErrorModel } from "../models/ErrorModel";
// import { LanguageModel } from "../models/LanguageModel";

export class Helpers {
    static isEmpty(text: any) {
        try {
            if (text === undefined)
                return true;

            if (text === null)
                return true;

            if (text.trim() === '')
                return true;

            return false;
        } catch (error) {
            return false;
        }
    }

    static getNameSurnameSplit(_str: string) {
        var name = "";
        var surname = "";

        var splitted = _str.split(' ').map(x => x.trim()).filter(x => x != '');

        for (var i = 0; i < splitted.length; i++) {
            if (i === splitted.length - 1)
                surname = splitted[i]
            else
                name += splitted[i] + " ";
        }

        return { name: name.trim(), surname: surname.trim() }
    }

    static randomNumber() {
        var ret = Math.floor(100000 + Math.random() * 900000);
        return ret.toString()
    }

    static merge2dArray(_arr: any[][]) {
        var merged = []

        for (var i = 0; i < _arr.length; i++) {
            var item = _arr[i]

            for (var k = 0; k < item.length; k++) {
                var item2 = item[k];
                merged.push(item2)
            }
        }

        return merged;
    }

    static isStringArray(value: any): value is string[] {
        if (value instanceof Array) {
            for (const item of value) {
                if (typeof item !== 'string') {
                    return false
                }
            }
            return true
        }
        return false
    }

    static sort(_list: number[] | string[]) {
        _list = _list.sort(function (a: any, b: any) { return a - b; });


        return _list;
    }

    static sortListByProperty(_list: any, _property: string, _reverseAfter = false) {
        var ll = _list.sort((a: any, b: any) => (a[_property] > b[_property]) ? 1 : -1);

        if (_reverseAfter)
            ll = ll.reverse();
        return ll;
    }

    static yyyyMMddToObject(_date: string) {
        if (this.isEmpty(_date))
            return {
                year: '',
                month: '',
                day: ''
            };

        _date = _date.split('T')[0];

        return {
            year: _date.split('-')[0],
            month: _date.split('-')[1],
            day: _date.split('-')[2]
        };
    }

    static removeHtmlFromString(_str: string) {
        return _str.replace(/<\/?[^>]+(>|$)/g, "");
    }

    // static ddMMyyyyToDate(_str: string) {
    //     var obj = this.ddMMyyyyToObject(_str)
    //     var yyyyMMdd = obj.year + "-" + obj.month + "-" + obj.day + " 00:00:00";
    //     var returnVal = moment(yyyyMMdd, "YYYY-MM-DD HH:mm:ss").add(3, 'hours').toDate();
    //     return returnVal;
    // }

    static yyyyMMddToddMMyyyy(_str: string) {
        if (this.isEmpty(_str))
            return '';

        return this.yyyyMMddToObject(_str).day + "." + this.yyyyMMddToObject(_str).month + "." + this.yyyyMMddToObject(_str).year;
    }

    static ddMMyyyyToObject(_date: string) {
        return {
            year: _date.split('.')[2],
            month: _date.split('.')[1],
            day: _date.split('.')[0]
        };
    }

    static correctPrice = (_number: any) => {
        if (this.isEmpty(_number))
            return '';

        try {
            _number = _number.toFixed(2);
        } catch (error) {

        }

        var str = _number.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        if (!str.includes(','))
            str += ',00';


        if (str.split(',')[str.split(',').length - 1].length === 1)
            str += "0";

        return str;
    }

    static dateParser(_date: string | undefined, _withTime: boolean = false) {
        if (this.isEmpty(_date))
            return '';

        if (!_date)
            return '';

        var result = "";
        var date = _date.split('T')[0];
        var year = date.split('-')[0];
        var month = date.split('-')[1];
        var day = date.split('-')[2];

        result = `${day}.${month}.${year}`;

        if (_withTime) {
            var time = _date.split('T')[1];
            var hour = time.split(':')[0]
            var minute = time.split(':')[1]

            result += ` ${hour}:${minute}`
        }

        return result;
    }

    static parseErrorMessage(error: any) {
        //console.log(JSON.stringify(error))

        //console.log('error', JSON.stringify(error))

        //console.log("error.response", error.response)

        if (typeof (error) === 'string') {
            return error;
        }

        if (!this.isEmpty(error.response) && !this.isEmpty(error.response.data) && typeof (error.response.data) === 'string') {
            return error.response.data;
        }

        // if (!this.isEmpty(error.response) && !this.isEmpty(error.response.data) /*&& typeof (error.response.data) === 'string'*/) {
        //     var errModel: ErrorModel = error.response.data;

        //     if (!Helpers.isEmpty(errModel.errors) && errModel.errors.length > 0)
        //         return errModel.errors.map(x => x.errorMessage.trim()).join(', ');
        // }

        if (!this.isEmpty(error.response) && !this.isEmpty(error.response.status) && (error.response.status === 401 || error.response.status === 403)) {
            return "Yetkisiz erişim.";
        }

        if (error.message === 'Network Error') {
            return "Bağlantı hatası, lütfen bağlantınızı kontrol ediniz."
        }

        return "Bir hata oluştu!";
    }

    static dataParser(_resp: any) {
        if (_resp.status === 204)
            return null;

        return _resp.data;
    }

    static getVersion() {
        return "v0.1";
    }

    static getConstants() {
        return {
            grant_type: process.env.NEXT_PUBLIC_GRANT_TYPE,
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            scope: process.env.NEXT_PUBLIC_SCOPE,
        }
    }

    static getEndpoint() {
        return {
            BASE_URL: 'https://api.lookupdatas.com',
            securitymanagement: 'securitymanagement'
        }
    }

    static getStorageKeys() {
        return [
            "user",
            "user_token",
        ];
    }

    static sumOfNumbers(_numbers: number[]) {
        const sum = _numbers.reduce((partialSum, a) => partialSum + a, 0);
        return sum;
    }

    static nFormatter(num: number) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num.toFixed(1);
    }

    static prependZero(_str: string, _newLength: number) {
        while (_str.length < _newLength)
            _str = "0" + _str;

        return _str
    }

    static getMonthName(_month: number) {
        if (_month === 1) return 'Ocak';
        else if (_month === 2) return 'Şubat';
        else if (_month === 3) return 'Mart';
        else if (_month === 4) return 'Nisan';
        else if (_month === 5) return 'Mayıs';
        else if (_month === 6) return 'Haziran';
        else if (_month === 7) return 'Temmuz';
        else if (_month === 8) return 'Ağustos';
        else if (_month === 9) return 'Eylül';
        else if (_month === 10) return 'Ekim';
        else if (_month === 11) return 'Kasım';
        else if (_month === 12) return 'Aralık';
        else return "";
    }

    static getMonthList() {
        return [
            { label: 'Ocak', value: '1' },
            { label: 'Şubat', value: '2' },
            { label: 'Mart', value: '3' },
            { label: 'Nisan', value: '4' },
            { label: 'Mayıs', value: '5' },
            { label: 'Haziran', value: '6' },
            { label: 'Temmuz', value: '7' },
            { label: 'Ağustos', value: '8' },
            { label: 'Eylül', value: '9' },
            { label: 'Ekim', value: '10' },
            { label: 'Kasım', value: '11' },
            { label: 'Aralık', value: '12' }
        ]
    }

    // static parseBoolean(_var: boolean | undefined, _languageModel: LanguageModel) {
    //     if (Helpers.isEmpty(_var))
    //         return "";

    //     if (_var === true)
    //         return _languageModel.AKTIF;

    //     return _languageModel.PASIF;
    // }

    static stringToBoolean(_val: string | undefined) {
        if (Helpers.isEmpty(_val))
            return undefined;

        return _val === 'true';
    }

    // static checkPermission(_name: string, auth: authSlice) {
    //     if ((_name === 'Fatura' || _name === 'Invoice') && !auth.user.user?.roles.map(x => x.code).includes('0001'))
    //         return false;

    //     if (_name === 'Limit' && !auth.user.user?.roles.map(x => x.code).includes('0002'))
    //         return false;

    //     return true;
    // }

    static parseFilterTopItem(_start: string, _end: string) {
        if (!this.isEmpty(_start) && !this.isEmpty(_end))
            return _start + " - " + _end;

        if (!this.isEmpty(_start))
            return _start;

        if (!this.isEmpty(_end))
            return _end;

        return "";
    }

    static generateNumberArray(_start: number, _end: number) {
        var arr = []

        for (var i = _start; i <= _end; i++) {
            arr.push(i);
        }

        return arr;
    }
}