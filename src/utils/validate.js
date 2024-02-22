
export const checkValidData=(email,Password)=>{
    const isEmailValid =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

    if(!isEmailValid) return "email is not valid";
    if(!isPasswordValid) return "password is not corrrect";

    return null;
};