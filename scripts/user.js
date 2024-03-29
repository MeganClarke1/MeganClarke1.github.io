"use strict";

(function (core) {

    class User{

        constructor(displayName = "", emailAddress = "", userName = "", password = "") {
            this._displayName = displayName;
            this._emailAddress = emailAddress;
            this._userName = userName;
            this._password = password;
        }

        get displayName() {
            return this._displayName;
        }

        set displayName(value) {
            this._displayName = value;
        }

        get emailAddress() {
            return this._emailAddress;
        }

        set emailAddress(value) {
            this._emailAddress = value;
        }

        get userName() {
            return this._userName;
        }

        set userName(value) {
            this._userName = value;
        }

        toString(){
            return `Display Name: ${this._displayName}\nEmail Address: 
                ${this._emailAddress}\nUsername: ${this.userName}`;
        }

        toJSON() {
            return {
                DisplayName : this._displayName,
                EmailAddress : this._emailAddress,
                Username : this._userName,
                Password: this.Password
            }
        }

        fromJSON(data) {
            this._displayName = data.DisplayName;
            this._emailAddress = data.EmailAddress;
            this._userName = data.Username;
            this._password = data.Password;
        }

        serialize(){
            if(this._displayName !== "" && this._emailAddress !== "" && this._userName !== ""){
                return `${this._displayName}, ${this._emailAddress}, ${this._userName}`;
            }
            console.error("Failed to serialize, one or more user attributes were missing.");
            return null;
        }

        deserialize(data){
            let propertyArray = data.split(",");
            this._displayName = propertyArray[0];
            this._emailAddress = propertyArray[1];
            this._userName = propertyArray[2];
        }
    } //end of user class

    core.User = User;

})(core || (core = {}) );