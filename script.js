// Checkbox for man and woman
var manCheckBox = document.querySelector('input[name = "men"]'); 
var womanCheckBox = document.querySelector('input[name = "woman"]');

manCheckBox.addEventListener('change', function(){
    if  (manCheckBox.checked){
        womanCheckBox.disabled = true;
    } else {
        womanCheckBox.disabled = false;
    }
});

womanCheckBox.addEventListener('change', function(){
    if(womanCheckBox.checked){
        manCheckBox.disabled = true
    } else {
        manCheckBox.disabled = false;
    }

});


//BMI calculator
var calculateButton = document.querySelector('button');

calculateButton.addEventListener('click', function(){
    var isMale = document.querySelector('input[name="men"]').checked;
    var isFemale = document.querySelector('input[name="woman"]').checked;
    var age = parseInt(document.querySelector('input[name="age"]').value);
    var height = parseInt(document.querySelector('input[name="height"]').value);
    var weight = parseInt(document.querySelector('input[name="weight"]').value);

   
    if(isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert('გთხოვთ შეიყვანოთ ვალიდური მნიშვნელობები, ასაკითვის, სიმაღლისთვის და წონისთვის.');
        return;
        
    };
    if(!isMale && !isFemale) {
        alert('გთხოვთ მონიშნოთ სქესი: მამრობითი ან მდედრობითი');
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));

    var result = document.querySelector('p');
    result.textContent = 'შედეგი: შენი BMI არის ' + bmi.toFixed(2);
});



