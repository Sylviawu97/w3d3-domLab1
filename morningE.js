
let getAndReturnPeople = async () => {
    let response = await fetch('https://swapi.dev/api/people')
    let parsedResponse = await response.json()
    let peopleArray = parsedResponse.results;

    return peopleArray;
}

const doProblem = async () => {
    let peopleArray = await getAndReturnPeople();
    console.log(peopleArray);
    // do your work here inside this function
    for(let i=0;i<peopleArray.length;i++){
        console.log(peopleArray[i].name)
    }
  //Medium - Loop through this array and make a new array that only contains people that are shorter than 165cm
    let shorterPeople=[];
     for(let i=0;i<peopleArray.length;i++){
        if(parseInt(peopleArray.height)<165){
            shorterPeople.push(peopleArray)
             console.log(shorterPeople)
            }
      }
// // Hard - loop thorugh and find the tallest and shortest males and females.
//     let newPeopleArray=[];
//       for(let i=0;i<peopleArray.length;i++){
//         if(peopleArray[i].gender==="male"){
//             let HeightofMan= +peopleArray.height
//             let maxHeightofMan={}
//             console.log(Math.max(maxHeightofMan))
//         }
//         else if(peopleArray[i].gender==="female")
//       }

    
}

  
doProblem()

