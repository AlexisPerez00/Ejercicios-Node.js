//Imports de los módulos
//fs y path
const fs = require('fs').promises
const path = require('path')
const pathUser = path.resolve("users.json")

const getUsers = async() => {
    //Leer el archivo
    try {
        const users = await fs.readFile(pathUser, {encoding: "utf8"})
    //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
        return JSON.parse(users)
    } catch (error) {
            console.log(error)
    }
};

const addUser = async (userObj) => {
    try {
        //leer el archivo
        const users = await getUsers()
        //convertir el contenido en formato JSON en un objeto JS
        //agregar el usuario en el arreglo
        users.push(userObj)
        //sobreescribir el arreglo en el archivo
        fs.writeFile(pathUser, JSON.stringify(users))

    //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
    //que acabas de agregar en el arreglo
        return userObj
    } catch (error) {
        console.log(error)        
    } 

    
};

const clearUsers = async () => {
    try {
        //Vaciar el arreglo y sobreescribir el archivo
        await fs.writeFile(pathUser, JSON.stringify([]))
        //Si el proceso se realizó correctamente tendrás que regresar true
        return true
    } catch (error) {
        console.log(error)        
    }
    
}

module.exports = {
    getUsers,
    addUser,
    clearUsers,
};
