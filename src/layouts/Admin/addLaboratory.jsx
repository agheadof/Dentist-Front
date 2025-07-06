import * as React from "react"
import DrButton from "../../components/DrButton"
import { Box, Typography } from "@mui/material"
import { useFormik } from "formik"

import Modal from "@mui/material/Modal"
import {
  Card,
  CardActions,
  CardContent,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material"

export default function AddLaboratory({ ...props }) {
  let setCurrentTarget = props.setCurrentTarget
  let LaboratoryArray = props.LaboratoryArray

  const [open, setOpen] = React.useState(true)
  const handleClose = () => setOpen(false)

  const LaboratoryFormik = useFormik({
    initialValues: {
      laboratory: "",
      date: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
      >
        <Modal
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          open={open}
          onClose={handleClose}
        >
          <Card fullWidth>
            <CardContent>
              <Box component="form" onSubmit={LaboratoryFormik.handleSubmit}>
                <Stack direction={"column"} spacing={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      sx={{
                        py: 1,
                        bgcolor: "lightgray",
                        color: "black",
                        textAlign: "center",
                        boxShadow: "3px 3px 5px gray",
                        width: "50%",
                        height: "50%",
                      }}
                    >
                      Laboratory
                    </Typography>

                    <TextField
                      variant="standard"
                      fullWidth
                      id="doctor"
                      name="doctor"
                      sx={{ width: "200px" }}
                      value={LaboratoryFormik.values.laboratory}
                      onChange={LaboratoryFormik.handleChange}
                    >
                      {LaboratoryArray.map((item) => {
                        ;<MenuItem value={"item"}>{item}</MenuItem>
                      })}
                    </TextField>
                  </Stack>

                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      sx={{
                        py: 1,
                        bgcolor: "lightgray",
                        color: "black",
                        textAlign: "center",
                        boxShadow: "3px 3px 5px gray",
                        width: "50%",
                        height: "50%",
                      }}
                    >
                      Date
                    </Typography>
                    <TextField
                      sx={{ width: "200px" }}
                      variant="standard"
                      fullWidth
                      id="date"
                      name="date"
                      type="date"
                      value={LaboratoryFormik.values.date}
                      onChange={LaboratoryFormik.handleChange}
                    ></TextField>
                  </Stack>
                </Stack>
              </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <DrButton
                size={"large"}
                style={{ margin: "5px", width: "30%" }}
                onClick={() => setCurrentTarget("finance")}
              >
                OK
              </DrButton>
              <DrButton
                size={"large"}
                style={{ margin: "5px", width: "30%" }}
                onClick={() => setCurrentTarget("finance")}
              >
                Cancle
              </DrButton>
              <DrButton
                size={"large"}
                style={{ margin: "5px", width: "60%" }}
                onClick={() => setCurrentTarget("laboratory")}
              >
                + Add new laboratory
              </DrButton>
            </CardActions>
          </Card>
        </Modal>
      </Box>
    </>
  )
}
