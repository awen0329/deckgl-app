import React from "react"
import { styled } from "@mui/material/styles"
import { Box, Grid, Typography, Slider, Input as MuiInput } from "@mui/material"

const Input = styled(MuiInput)`
  width: 42px;
`

interface CustomSliderProps {
  label: string
  value: number | string | Array<number | string>
  // eslint-disable-next-line no-unused-vars
  onChange: (value: number | string | Array<number | string>) => void
}

const CustomSlider: React.FC<CustomSliderProps> = ({ label, value, onChange }) => {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    onChange(newValue)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === "" ? 0 : Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < 0) {
      onChange(0)
    } else if (value > 100) {
      onChange(100)
    }
  }

  return (
    <Box sx={{ maxWidth: 250, py: 4 }}>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            data-testid={`${label}_slider_controller`}
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            data-testid={`${label}_input_controller`}
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CustomSlider
