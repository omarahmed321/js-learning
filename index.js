function task1() {
    let grade = Number(prompt('الاسكور؟'));
    if(grade <= 100 && grade >=0){
        let attendance = confirm('بتحضر كويس؟');
        if(attendance){
            grade+=3;
        }
        if(grade >= 50 && grade <55){
            console.log('نجحت');
        }
        else if(grade >= 55&& grade <65){
            console.log('D');
        }
           else if(grade >= 65&& grade <75){
            console.log('C');
        }
           else if(grade >= 75&& grade <85){
            console.log('B');
        }
           else if(grade >= 85&& grade <=100){
            console.log('A');
        }
        else{
            console.log('سقطت يدولي')
        }

    }
}

function task2(){
    let MobileBalance = Number(prompt('mobile balance'));
    MobileBalance += (2/100 * MobileBalance);
    MobileBalance+=(14/100 * MobileBalance);
    console.log('fee ' + MobileBalance)
}
function task3(){
    let LitersFuel = Number(prompt('liters?'));
    LitersFuel = LitersFuel *12;
    LitersFuel-= (5/100 * LitersFuel);
    LitersFuel+= (14/100 * LitersFuel);
    console.log('cost: ' +LitersFuel )

}

function task4(){
    // 
    let USD = Number(prompt('USD?'))
        USD *= 48;
        USD -= (USD * (3/100));
        console.log('ELFLOOS: '+ USD)

    
}
