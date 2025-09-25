let Vehicle = function(initialData){
    let {id, latitude, longitude} = initialData;

    this.setPosition = function(latitude, longitude){
        this.latitude = latitude;
        this.longitude = longitude;
        this.time = Date.now();
    };
    
    this.id = id;
    this.time = Date.now();
    this.status = "available";
    this.setPosition(latitude, longitude);
};

let vehicle1 = new Vehicle({id: "CHEVETTE", latitude: 1234567, longitude: 7654321});

console.log(vehicle1);