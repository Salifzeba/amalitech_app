const deleteBtn = document.getElementsByClassName('delete-btn');
console.log(deleteBtn);

for(let i = 0; i<deleteBtn.length; i++){
    deleteBtn[i].addEventListener('click', (e)=>{
        e.preventDefault();
        const id = deleteBtn[i].dataset.id;
        const endpoint = `user/${id}`;
        fetch(endpoint,{
            method:'DELETE'
        }).then(res=> res.json())
        .then((result)=>{
            window.location.href = result.redirect;
            alert(result.msg);
        }).catch(error=>console.log(error))
    })
    
}


// deleteBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     const id = deleteBtn.dataset.id;
//     console.log(id);
//     const endpoint = `/user/${id}`;
//     fetch(endpoint,{
//         method:'DELETE'
//     }).then((results)=>{
//         console.log(results);
//     }).catch(error=>{
//         console.log(error);
//     });
    
//  });