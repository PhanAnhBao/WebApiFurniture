const Customer = require('../models/Customer');

class CustomerController {

    // [GET] /api/customers
    getCustomer(req, res, next) {
        Customer.find({}).sort({'createdAt': -1})
        .then(cus => {
            res.json(cus);
        })
        .catch(next);
    }

    // [GET] /api/customers/:name
    getCustomerByName(req, res, next) {
        Customer.find({customer_name:  new RegExp(req.params.name, 'i')})
            .then(cus => {
                res.json(cus);
            })
            .catch(next);
    }

    // [GET] /api/:id/customers
    edit(req, res, next) {
        Customer.findById(req.params.id)
        .then((pro) => {
            res.json(pro);
        })
    }


    // [POST] /api/customers/store
    store(req, res, next) {
        const customer = new Customer(req.body);
        customer.save();
        res.send('SUCCESS');
    } 

    // [PUT] /api/customers/:id
    update(req, res, next) {
        Customer.updateOne({_id: req.params.id}, req.body)
        .then(() => res.json())
        .catch(next);
    }

    // [DELETE] /api/customers/:id
    destroy(req, res, next) {
        Customer.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CustomerController;