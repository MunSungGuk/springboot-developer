const deleteButton = document.getElementById('delete-btn');

if(deleteButton) {
    deleteButton.addEventListener('click',event => {
        let id = document.getElementBuId('article-id').value;
        fetch('/api/articles/${id}',{
        method : 'DELETE'
        })
        .hen(() => {
        alert('삭제가 완료되었습니다.');
        location.replace('/articles');
        })
    })
}