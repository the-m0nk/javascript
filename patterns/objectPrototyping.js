function Bike(model,color){
    this.model = model,
    this.color = color,
    console.log(this.color , "Color")
    this.getDetails = function(){
        return this.model+ 'bike is' + this.color
    }
    }
    var bikeObj1 = new Bike('BMW' , 'Black');
    var bikeObj2 = new Bike("BMW" , "White");
    console.log(bikeObj1.getDetails());
    console.log(bikeObj2.getDetails());

    console.log(bikeObj1 , bikeObj2);