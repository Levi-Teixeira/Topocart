import formulário from './Frmulário.js';


const Home = () =>{

    const handleSubmit = (e) =>{
        e.preventDefault()
        const print = new FormData(e.target)
        let printObject = {};
    
        for ( let [chave, valor] of print.entries()){   
            printObject[chave] = valor                  //Adicionando atributos no objeto criado
        }

        const printJson = JSON.stringify(printObject);

        console.log("Aqui está o resultado em JSON do seu formulário:")
        console.log(printJson)
        window.alert('Formulário enviado! Verifique o console para visualizar o JSON.')
    }


    formulário.campos.sort((a, b)=> a.ordem - b.ordem) // Ordena o formulário com base no atributo "ordem" do objeto
    

    return(
        <>
        <h1>{formulário.titulo}</h1>
        <form onSubmit={handleSubmit}> 
            {formulário.campos.map((item)=>(
                <>
                <label for={item.id}>{item.label}</label>
                {item.name === 'selecao' ?              // Conditional rendering para criar um <input> ou um <select> a depender do valor de item.name
                
                <select id={item.id} name={item.name} >{item.options.map((opção)=><option value={opção.value}>{opção.text}</option>)}</select> 
                
                :

                <input type={item.type} value={item.value} name={item.name} id={item.id}></input> }
                </>
            ))}
            <input className='button' type='submit'></input>
        </form>
        </>
    )
}

export default Home;