class EmployeePayrollData{
    constructor(name,profilePic,gender,department,salary,startDate,note){
        this.name=name;
        this.profilePic=profilePic;
        this.gender=gender;
        this.department=department;
        this.salary=salary;
        this.startDate=startDate;
        this.note=note;
    }
    set name(name){
    const text = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    text.addEventListener('input', function() {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
		if(nameRegex.test(name))textError.textContent = " ";
        else textError.textContent = "Name is Incorrect";
    });
    }
    get name(){
        return this._name;
    }

    set profilePic(profilePic){
        this._profilePic=profilePic;
    }
	
	get profilePic(){
        return this._profilePic;
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
            +", profilePic = "+this.profilePic
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
    let employeePayrollData = new EmployeePayrollData();
    alert('form submitted \n'+employeePayrollData);
}





