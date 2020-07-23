
exports.selectAll =  (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : group list");
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.selectGroup = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : select group " + req.params.id);
        
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.addGroup = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : add group");
        
    } catch (error) {
        res.status(500).send(error);
    }

}

exports.deleteGroup = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : delete group");
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.updateGroup = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : updategroup");
        
    } catch (error) {
        res.status(500).send(error);
    }

}
