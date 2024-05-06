import priceModel from "../models/price.model.js"

export const getsPrice = async(req,res)=>{

    try{
      const Prices = await priceModel.find()
      if(Prices){
        return res.status(200).json({
          data:Prices,
          message:"fetched"
        })
      }
      return res.status(400).json({
        message:'bad request'
      })
    }catch(error){
     return res.status(500).json({
        message:error.message
     })
    }
}

export const addPrice = (req,res) => {
    try {
        
        const {price_name} = req.body

        const savePrices = new priceModel({
           price_name:price_name
        });
        savePrices.save();

        if (savePrices) {
            return res.status(201).json({
                data: savePrices,
                message: 'created'
            })
        }

        return res.status(400).json({
            message: 'Bad request'
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getPrice = async (req, res) => {
    try {
        const priceID = req.params.price_id;
        const price = await priceModel.findOne({_id: priceID });
        if (price) {
            return res.status(200).json({
                data: price,
                message: 'fetched'
            })
        }

        return res.status(400).json({
            message: 'Bad request'
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updatePrice = async (req, res) => {
    try {
        const priceID = req.params.price_id;
        const {price_name} = req.body
       
        const updatedPrice = await priceModel.updateOne({ _id: priceID }, {
            $set: {
                price_name:price_name
            }
        });
        if (updatedPrice.acknowledged) {
            return res.status(200).json({
                message: 'Updated'
            })
        }

        return res.status(400).json({
            message: 'Bad request'
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deletePrice = async (req, res) => {
    try {
        const priceID = req.params.price_id;
        const price = await priceModel.deleteOne({ _id: priceID });
        if (price.acknowledged) {
            return res.status(200).json({
                message: 'Deleted'
            })
        }

        return res.status(400).json({
            message: 'Bad request'
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}