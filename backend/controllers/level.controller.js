import levelModel from "../models/level.model.js"

export const getsLevel = async(req,res)=>{

    try{
      const Levels = await levelModel.find()
      if(Levels){
        return res.status(200).json({
          data:Levels,
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

export const addLevel = (req,res) => {
    try {
        
        const {level_name} = req.body

        const saveLevels = new levelModel({
           level_name:level_name
        });
        saveLevels.save();

        if (saveLevels) {
            return res.status(201).json({
                data: saveLevels,
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

export const getLevel = async (req, res) => {
    try {
        const levelID = req.params.level_id;
        const level = await levelModel.findOne({_id: levelID });
        if (level) {
            return res.status(200).json({
                data: level,
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


export const updateLevel = async (req, res) => {
    try {
        const levelID = req.params.level_id;
        const {level_name} = req.body
       
        const updatedLevel = await levelModel.updateOne({ _id: levelID }, {
            $set: {
                level_name:level_name
            }
        });
        if (updatedLevel.acknowledged) {
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

export const deleteLevel = async (req, res) => {
    try {
        const levelID = req.params.level_id;
        const level = await levelModel.deleteOne({ _id: levelID });
        if (level.acknowledged) {
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
