var HelloTypeScript = (function () {
    function HelloTypeScript(message) {
        this.helloString = message;
    }
    HelloTypeScript.prototype.hello = function () {
        return this.helloString;
    };
    return HelloTypeScript;
}());
var myName = 'SanShui';
var myAge = 23;
var sentence = "Hello, my na2me is " + myName + ". I'll be " + (myAge + 1) + " years old next month";
var helloTypeScript = new HelloTypeScript(sentence);
document.body.innerHTML = helloTypeScript.hello();
//# sourceMappingURL=main.js.map