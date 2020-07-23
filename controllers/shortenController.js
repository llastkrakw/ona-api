

exports.selectAll =  (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : short list");
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.selectShort = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : select short " + req.params.id);
        
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.addShort = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : add short");
        
    } catch (error) {
        res.status(500).send(error);
    }

}

exports.deleteShort = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : delete short");
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.updateShort = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : updateshort");
        
    } catch (error) {
        res.status(500).send(error);
    }

}
