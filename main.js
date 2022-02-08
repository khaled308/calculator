class Calculator{
    constructor(previous,current){
        this.previous = previous
        this.current = current
    }
    addNumber(number){
        if(number == '.' && this.current.textContent.indexOf('.')!=-1) return
        this.current.textContent += number
    }
    doOperation(operation){
        if(this.previous && this.current) this.calc()
        
        this.previous.textContent = this.current.textContent + operation
        this.current.textContent = ''
    }
    calc(){
        let firstOperand = Number(this.previous.textContent.slice(0,-1))
        let secondOperand = Number(this.current.textContent)
        let operation = this.previous.textContent[this.previous.textContent.length-1]
        this.previous.textContent = ''
        
        switch(operation){
            case '+':
                this.current.textContent = firstOperand + secondOperand
            break
            case '-':
                this.current.textContent = firstOperand - secondOperand
            break
            case '÷':
                this.current.textContent = firstOperand / secondOperand
            break
            case '*':
                this.current.textContent = firstOperand * secondOperand
        }
    }
    deleteAll(){
        this.previous.textContent = ''
        this.current.textContent = ''
    }
    deleteChar(){
        this.current.textContent = this.current.textContent.slice(0,-1)
    }
}



class App{
    constructor(){
        this.operations = document.querySelectorAll("[data-operation]")
        this.numbers = document.querySelectorAll("[data-number]")
        this.equal = document.querySelector("[date-equals]")
        this.deleteCharacter = document.querySelector("[data-delete]")
        this.deleteAll = document.querySelector("[data-alldelete]")
        this.previous = document.querySelector("[data-previous]")
        this.current = document.querySelector("[data-current]")

        this.calculator = new Calculator(this.previous,this.current)
    }
    
    start(){
        this.numbers.forEach((number)=>{
            number.addEventListener('click',(el)=>{
                this.calculator.addNumber(el.target.textContent)
            })
        })
        this.operations.forEach((operation)=>{
            operation.addEventListener('click',(el)=>{
                this.calculator.doOperation(el.target.textContent)
            })
        })
        
        this.equal.addEventListener('click',()=>{
            this.calculator.calc()
        })
        
        this.deleteCharacter.addEventListener('click',()=>{
            this.calculator.deleteChar()
        })
        
        this.deleteAll.addEventListener('click',()=>{
            this.calculator.deleteAll()
        })
        
    }
}


let app = new App()
app.start()