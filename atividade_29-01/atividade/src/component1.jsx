
function Button1(){
    function click(){
      alert('Voce criou um item');
  
    }
  
  
    return(
      <button style={{padding: '10px 20px', fontSize:'16px', cursor: 'pointer',color:"green"}}
      onClick={()=>click()}
      >Clique aqui</button>
    )
}
  export default Button1