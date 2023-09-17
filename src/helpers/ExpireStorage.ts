interface ExpireStorageModel {
    expireAt: Date,
    value: string
}

export default class ExpireStorage {
    static async getItem(key: string) {
        let strData = await localStorage.getItem(key);

        if (strData) {
            var data: ExpireStorageModel = JSON.parse(strData);
            if (
                data !== null &&
                data.expireAt &&
                new Date(data.expireAt) < new Date()
            ) {
                await localStorage.removeItem(key);
                return undefined;
            }
            return data?.value;
        }

        return undefined
    }

    static async setItem(key: string, value: string, expireInMinutes: number) {
        var data: ExpireStorageModel = {
            value: value,
            expireAt: this.getExpireDate(expireInMinutes)
        };

        const objectToStore = JSON.stringify(data);
        return await localStorage.setItem(key, objectToStore);
    }

    static async removeItem(key: string) {
        return await localStorage.removeItem(key);
    }

    static getExpireDate(expireInMinutes: number) {
        const now = new Date();
        const expireTime = new Date(now);
        expireTime.setMinutes(now.getMinutes() + expireInMinutes);
        return expireTime;
    }
}