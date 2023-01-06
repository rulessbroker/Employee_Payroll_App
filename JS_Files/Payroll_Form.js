class EmployeePayrollData{
    constructor(name,gender,department,salary,startDate,note){
        this.name=name;
        this.gender=gender;
        this.department=department;
        this.salary=salary;
        this.startDate=startDate;
        this.note=note;
    }
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }

    set gender(gender){
        this._gender=gender;
    }

    get gender(){
        return this._gender;
    }

    set department(department){
        this._department=department;
    }

    get department(){
        return this._department;
    }

    set salary(salary){
        this._salary=salary;
    }

    get salary(){
        return this._salary;
    }

    set startDate(startDate){
        this._startDate=startDate;
    }

    get startDate(){
        return this._startDate;
    }

    set note(note){
        this._note=note;
    }

    get note(){
        return this._note;
    }

    toString(){
        return(
            "{"
            +" Name = "+this.name
            +", Gender = "+this.gender
            +", Department = "+this.department
            +", Salary = "+this.salary
            +", Start Date = "+this.startDate
            +", Notes = "+this.note
            +" }"
        )
    }

}

function save(){
    let employeePayrollData = new EmployeePayrollData(
        document.querySelector('#name').value,
        document.querySelector('input[name="gender"]:checked').value,
        document.querySelector('input[type="checkbox"]:checked').value,
        document.querySelector('#salary').value,
        document.getElementById("start-date").value,
        document.querySelector('#notes').value
    );
    alert('form submitted \n'+employeePayrollData);
}