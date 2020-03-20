document.addEventListener('DOMContentLoaded',()=>{
class Calculator {

        constructor(previousOpreandTextElement,currentOpreandTextElement){
            this.previousOpreandTextElement = previousOpreandTextElement;
            this.currentOpreandTextElement = currentOpreandTextElement;
            this.clear();
        }

        clear(){
            this.previousOperend = ``;
            this.currentOperend = ``;
            this.operation = undefined;


        }
        delete(){
            if (this.currentOperend ===''){
                this.previousOperend = '';
            }else
            this.currentOperend = this.currentOperend.toString().slice(0,-1);

            console.log(this.chooseOperation)
        }

        appendNumber(number){
            if (number ==='.' && this.currentOperend.includes('.')) return
            this.currentOperend = this.currentOperend.toString() + number.toString();

        }
        chooseOperation(operation){
            if(this.currentOperend ==='')return
            if(this.previousOperend !== '') {
                this.compute();
            }
            this.operation = operation;
            if(this.currentOperend !=='')
            this.previousOperend = this.currentOperend;
            this.currentOperend ='';

        }
        compute(){
            if (this.operation === '*'){
            const temporaryPrevious = this.previousOperend;
            this.previousOperend = this.previousOperend.toString() + this.operation + this.currentOperend.toString();
            this.currentOperend = temporaryPrevious * this.currentOperend;
            }
        }
        getDisplayNumber(number) {
            const floatNumber = parseFloat(number);
            if (isNaN(floatNumber)) return ''
            return floatNumber.toLocaleString('en')
        }

        
        updateDisplay(){
            this.currentOpreandTextElement.innerHTML = this.getDisplayNumber(this.currentOperend);
            if(this.currentOperend != null && this.operation != undefined ){
            this.previousOpreandTextElement.innerHTML = 
            `${this.getDisplayNumber(this.previousOperend)} ${this.operation}`
            
        }
    
    }
}

    
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOpreandTextElement = document.querySelector('[data-previous-operand]');
const currentOpreandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOpreandTextElement, currentOpreandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerHTML);
        calculator.updateDisplay();
})
})

operationButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button.innerHTML);
        calculator.updateDisplay();
})
});

equalsButton.addEventListener('click', ()=>{
    calculator.compute();
    calculator.updateDisplay();
})
allClearButton.addEventListener('click', ()=>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateDisplay();
})


});

