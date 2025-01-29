function Button2(){
    function click(){
      alert('Voce deletou um item')
  
    }
  
  
    return(
      <button style={{padding: '10px 20px', fontSize:'16px', cursor: 'pointer',color:"red"}}
      onClick={()=>click()}
      >Clique aqui</button>
    )
}
  export default Button2