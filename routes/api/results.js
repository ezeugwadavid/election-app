const express = require("express");
const router = express.Router();
const sequelize = require("../../connection");
const { QueryTypes } = require("sequelize");

//@route POST api/election/pollingresults
//@desc  get polling unit results by name
//@access Public
router.post("/pollingresults", async (req, res) => {
  const { polling_unit_name } = req.body;
  try {
    const pollingUnits = await sequelize.query(
      `
        SELECT * FROM polling_unit WHERE  polling_unit_name='${polling_unit_name}'  
      `,
      { type: QueryTypes.SELECT }
    );
    const uniqueid = pollingUnits[0].uniqueid;
    const uniqueidString = uniqueid.toString();
    console.log(uniqueidString);
    const pollingUnitResults = await sequelize.query(
      `SELECT * FROM announced_pu_results WHERE polling_unit_uniqueid='${uniqueidString}'`,
      { type: QueryTypes.SELECT }
    );

    return res.status(200).json({ results: pollingUnitResults });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "could not find results for this polling unit" });
  }
});

//@route POST api/election/totalresults
//@desc  get all total of polling unit results by lga
//@access Public
router.post("/totalresults", async (req, res) => {
  const { lga_id } = req.body;
  try {
    const pollingUnits = await sequelize.query(
      `
        SELECT * FROM polling_unit WHERE lga_id='${lga_id}'  
      `,
      { type: QueryTypes.SELECT }
    );

    let uniqueidsArray = [];
    pollingUnits.map((pollingUnit) => {
      uniqueidsArray.push(pollingUnit.uniqueid);
    });

    let allPollingUnitArray = [];
    for (let id of uniqueidsArray) {
      let idString = id.toString();
      const result = await sequelize.query(
        `
            SELECT * FROM announced_pu_results WHERE polling_unit_uniqueid='${idString}'  
          `,
        { type: QueryTypes.SELECT }
      );
      allPollingUnitArray.push(result);
    }

    let totalPollingResultForEachParty = {
      PDP: 0,
      DPP: 0,
      ACN: 0,
      PPA: 0,
      CDC: 0,
      JP: 0,
      ANPP: 0,
      LABOUR: 0,
      CPP: 0,
    };

    for (let pu of allPollingUnitArray) {
      for (let i = 0; i < pu.length; i++) {
        if (pu[i].party_abbreviation.trim() === "PDP") {
          let score = pu[i].party_score;
          totalPollingResultForEachParty.PDP += score;
        }
        if (pu[i].party_abbreviation.trim() === "DPP") {
          let score = pu[i].party_score;
          totalPollingResultForEachParty.DPP += score;
        }
        if (pu[i].party_abbreviation.trim() === "ACN") {
          let score = pu[i].party_score;
          totalPollingResultForEachParty.ACN += score;
        }
        if (pu[i].party_abbreviation.trim() === "PPA") {
          let score = pu[i].party_score;
          totalPollingResultForEachParty.PPA += score;
        }
        if (pu[i].party_abbreviation.trim() === "CDC") {
          let score = pu[i].party_score;
          totalPollingResultForEachParty.CDC += score;
        }
        if (pu[i].party_abbreviation.trim() === "JP") {
          let score = pu[i].party_score;
          totalPollingResultForEachParty.JP += score;
        }
        if (pu[i].party_abbreviation.trim() === "ANPP") {
          let score = pu[i].party_score;
          totalPollingResultForEachParty.ANPP += score;
        }
        if (pu[i].party_abbreviation.trim() === "LABOUR") {
          let score = pu[i].party_score;
          totalPollingResultForEachParty.LABOUR += score;
        }
        if (pu[i].party_abbreviation.trim() === "CPP") {
          let score = pu[i].party_score;
          totalPollingResultForEachParty.CPP += score;
        }
      }
    }

    return res.status(200).json({ results: totalPollingResultForEachParty });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "could not find total results for this LGA" });
  }
});

//@route GET api/election/lga
//@desc  get all lga
//@access Public
router.get("/lga", async (req, res) => {
  try {
    const lgas = await sequelize.query(
      `
        SELECT * FROM lga  
      `,
      { type: QueryTypes.SELECT }
    );

    return res.status(200).json({ results: lgas });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        error: "could not find lga at this time, please try again later",
      });
  }
});

//@route POST api/election/pollingunit
//@desc  create pollingunit
//@access Public
router.post("/pollingunit", async (req, res) => {
  const {
    polling_unit_id,
    ward_id,
    lga_id,
    uniquewardid,
    polling_unit_number,
    polling_unit_name,
    polling_unit_description,
    lat,
    long,
    entered_by_user,
    date_entered,
    user_ip_address,
  } = req.body;
  try {
    const createPollingUnit = await sequelize.query(
      `INSERT INTO polling_unit (polling_unit_id, ward_id, lga_id, uniquewardid, polling_unit_number, polling_unit_name, polling_unit_description, lat, long, entered_by_user, date_entered, user_ip_address) VALUES
( '${polling_unit_id}', '${ward_id}', '${lga_id}', '${uniquewardid}', '${polling_unit_number}', '${polling_unit_name}', '${polling_unit_description}', '${lat}', '${long}', '${entered_by_user}', '${date_entered}', '${user_ip_address}')
      `,
      { type: QueryTypes.INSERT }
    );
    return res.status(200).json({ results: "created" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        error:
          "could not create polling unit at this time, please try again later",
      });
  }
});

//@route POST api/election/pollresults
//@desc  create new polling unit results
//@access Public
router.post("/pollresults", async (req, res) => {

  const {
    polling_unit_uniqueid,
    party_abbreviation,
    party_score,
    entered_by_user,
    date_entered,
    user_ip_address,
  } = req.body;
  
  try {
    const createNewResult = await sequelize.query(
      `INSERT INTO announced_pu_results (polling_unit_uniqueid, party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address) VALUES
( '${polling_unit_uniqueid}', '${party_abbreviation}', '${party_score}', '${entered_by_user}', '${date_entered}', '${user_ip_address}')
      `,
      { type: QueryTypes.INSERT }
    );

    return res.status(200).json({ results: "created" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        error: "could not create results at this time, please try again later",
      });
  }
});



//@route GET api/election/allpollingunits
//@desc  get newly created polling units
//@access Public
router.post("/allpollingunits", async (req, res) => {
  const {
    polling_unit_id
  } = req.body;
  try {
    const pollingUnits = await sequelize.query(
      `SELECT * FROM polling_unit WHERE polling_unit_id = '${polling_unit_id}'
      `,
      { type: QueryTypes.SELECT}
    );
    return res.status(200).json({ results: pollingUnits });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        error: "could not fetch polling units, please try again later",
      });
  }
});

//@route GET api/election/wards
//@desc  get wards by lga
//@access Public
router.post("/wards", async (req, res) => {
  const {
    lga_id
  } = req.body;
  try {
    const wards = await sequelize.query(
      `SELECT uniqueid, ward_id, ward_name FROM ward WHERE lga_id = '${lga_id}'
      `,
      { type: QueryTypes.SELECT }
    );
  
    return res.status(200).json({ results: wards });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        error: "could not fetch wards, please try again later",
      });
  }
});

module.exports = router;
