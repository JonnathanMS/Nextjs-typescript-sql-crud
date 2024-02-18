
{
    // Ejemplo de query
    // http://localhost:3000/api/users/5?nombre=Laura&apellido=Castellanos


    //!como el useEffect no permite usar await si no es dentro de una funcion se usa then en este caso:
    useEffect(() => {
        if (params.id) {
            axios.get(`/api/tasks/${params.id}`).then(res => console.log(res.data));
        }
    }, [])
}

// *seccion navbar
{

}