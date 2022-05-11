(function () {
    document.form.register.novalidate = true;
    $('form').on('submit', function (e) {
        var elements = this.elements;
        var valid = {};
        var isValid;
        var isFormValid;
        //Pefroms Genric checks
        for (var i = 0, l = (elements.length - 1); i < l; i++){
            isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
            if (!isValid) {
                showErrorMessage(elements[i]);
            } else {
                removeErrorMessage(elements[i]);
            }
            valid[elements[i].id] = isValid;
        }
        if(!validatetext()){
            showErrorMessage(document.getElementById("text"));
            valid.text=false;
        }else{
            removeErrorMessage(document.getElementById("text"));
        }
        for (var field in valid) {
            if (!valid[field]) {
                isFormValid = false;
                break;
            }
            isFormValid = true;
        }
        if (!isFormValid) {
            e.preventDefault();
        }
    });
});
