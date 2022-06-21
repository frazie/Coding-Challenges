// Define a method hello that returns "Hello,Name!" to a given name, or says Hello, World! if name is not given(or passed as an empry string).Define

// Assuming that name is a string and it checks for user typose to return a name with a first capital letter (Xxxx)


// solution

function hello(name){
    if (name == !null)
    {
        return `Hello, ${name[0],toUppercase() + name.slice(1).toLowerCase()}!`
    }else {
        return "Hello, World!"
    }

    
}