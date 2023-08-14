const Customer = require('../model/CustomerSchema')

const saveCustomer=(req,resp)=>{
    const customerDTO = new Customer({
        id:req.body.id,
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });
    customerDTO.save().then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

const updateCustomer=(req,resp)=>{
    Customer.updateOne({id:req.body.id},{
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    }).then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

const deleteCustomer=(req,resp)=>{
    Customer.deleteOne({id:req.headers.id}).then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

const getCustomer=(req,resp)=>{
    Customer.findOne({id:req.headers.id}).then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

const getAllCustomer=(req,resp)=>{
    Customer.find().then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const searchCustomer=(req,resp)=>{

    const txt = req.headers.text;

    Customer.find({
        $or:[
            {id:txt}
        ]
    }).then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}



module.exports={
    saveCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomer,
    getAllCustomer,
    searchCustomer
}