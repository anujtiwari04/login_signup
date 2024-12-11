import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, MenuItem } from "@mui/material";
import ReactWorldFlags from "react-world-flags";
import icon from "../assets/Frame 401.png"; // Make sure this path is correct
import image from "../assets/Frame 436.png"; // Importing the image

const countryOptions = [
  { code: "US", dialCode: "+1", label: "United States" },
  { code: "GB", dialCode: "+44", label: "United Kingdom" },
  { code: "IN", dialCode: "+91", label: "India" },
  { code: "FR", dialCode: "+33", label: "France" },
  { code: "DE", dialCode: "+49", label: "Germany" },
  { code: "JP", dialCode: "+81", label: "Japan" },
  { code: "AU", dialCode: "+61", label: "Australia" },
  { code: "CN", dialCode: "+86", label: "China" },
  { code: "IT", dialCode: "+39", label: "Italy" },
  { code: "ES", dialCode: "+34", label: "Spain" },
];

const Mui = () => {
  const [selectedCountry, setSelectedCountry] = useState("FR");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      {/* Left Section with Image */}
      <div className="w-2/5 p-8 flex items-center justify-center">
        <img
          src={image} // Use your actual image URL here
          alt="Logo"
          className="w-full h-auto rounded-lg"
        />
      </div>





      

      {/* Right Section with Form */}
      <div className="bg-white py-8 px-12 rounded-lg w-2/5">
        {/* Top Icon */}
        <img src={icon} alt="Icon" className="mx-auto mb-4 h-12" />

        {/* Form Title */}
        <h1 className="text-2xl font-semibold text-center mb-6">Informations du titulaire</h1>

        {/* Name Input */}
        <div className="my-2">
            <p className="my-2">Name</p>
          <TextField
            label="Nom"
            variant="outlined"
            fullWidth
            required
          />
        </div>
        <div className="my-2">
        <p className="my-2">Name</p>

          <TextField
            label="Prénom"
            variant="outlined"
            fullWidth
            required
          />
        </div>

        {/* Date of Birth Input */}
        <div className="my-2">
        <p className="my-2">Name</p>

          <TextField
            label="Date de naissance"
            variant="outlined"
            type="date"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
          />
        </div>

        {/* Professional ID Input */}
        <div className="my-2">
        <p className="my-2">Name</p>

          <TextField
            label="Numéro professionnel pharmacien"
            variant="outlined"
            fullWidth
            required
          />
        </div>

        {/* SIRET Input */}
        <div className="my-2">
        <p className="my-2">Name</p>

          <TextField
            label="SIRET"
            variant="outlined"
            fullWidth
            required
          />
        </div>

        {/* Phone Number Input with Country Code */}
        <div className="my-2">
          <div className="flex items-center gap-4">
            <TextField
              select
              label="Code"
              value={selectedCountry}
              onChange={handleCountryChange}
              className="w-1/3"
              variant="outlined"
            >
              {countryOptions.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  <div className="flex items-center gap-2">
                    <ReactWorldFlags code={country.code} className="w-6 h-4" />
                    {country.dialCode}
                  </div>
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Numéro de téléphone"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-4">
          <FormControlLabel
            control={<Checkbox required />}
            label={
              <span>
                J'accepte les <b>Conditions Générales d’Utilisation</b>, les{" "}
                <a
                  href="/payment-terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Conditions d’Utilisation des Services de Paiement
                </a>
                , et je reconnais avoir pris connaissance de la{" "}
                <b>Politique de Confidentialité</b>.
              </span>
            }
          />
        </div>

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
        >
          Accepter et continuer
        </Button>
      </div>
    </div>
  );
};

export default Mui;