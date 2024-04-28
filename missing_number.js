
function myFunction2(arr,brr){
    let result = []
    let crr=[...new Set(brr)]
    crr.sort((a,b)=>a-b)
    // console.log(crr)

    // let check = arr.every(isSameType)

    // function isSameType(TYPE){
    //     return TYPE === Number
    // }
    
    if (arr === undefined || brr === undefined) {
        return "Lengkapi data terlebih dahulu"
    }else if(arr instanceof Array !== true || brr instanceof Array!==true){
        return "Type data input bukan ARRAY!!"
    }
    // else if(check===false){
    //     return "Ada data yang bukan bertipe NUMBER"
    // }
    else {
        crr.forEach(anak_crr => {
            // if(arr[anak_crr] instanceof Number !== true){
            //     return "Salah satu isi array bukan NUMBER"
            // }

            let dummyBrr = 0
            let dummyArr = 0
            brr.forEach(dalem_brr => {
                if(anak_crr===dalem_brr){
                    dummyBrr++
                }
                
            });
            arr.forEach(dalem_arr => {
                if(anak_crr===dalem_arr){
                    dummyArr++
                }
            })
            if(dummyBrr>dummyArr){
                result.push(anak_crr)
            }
        });
    }

    // console.log(result)
    result.sort((a,b)=>a-b) 
    return result
    
}

export default myFunction2