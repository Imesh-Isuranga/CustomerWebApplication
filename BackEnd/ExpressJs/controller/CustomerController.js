const Customer = require('../model/CustomerSchema')

const saveCustomer=(req,res)=>{
    const customerDTO = new Customer({
        id:req.body.id,
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });
    customerDTO.save().then(result=>{
        response.staus(201).json(result);
    }).catch(error=>{
        response.staus(500).json(error);
    });
}

const updateCustomer=(req,res)=>{

}

const deleteCustomer=(req,res)=>{

}

const getCustomer=(req,res)=>{

}

const getAllCustomer=(req,res)=>{

}
