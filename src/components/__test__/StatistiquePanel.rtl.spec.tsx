/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import StatistiquePanel from "../StatistiquePanel"
import * as utils from "../../utils"
import { sourceData } from "../../test-utils/fixture"

describe("StatistiquePanel", () => {
  it("should render statistique once json data exist", async () => {
    const defaultProps = {
      jsonData: sourceData,
      controlOptions: {
        coverage: 100,
        floorCount: 5,
        floorHeight: 2,
      },
    }
    render(<StatistiquePanel {...defaultProps} />)
    const panel = screen.getByTestId("statistique_panel")
    expect(panel).toBeInTheDocument()
    const { landArea } = utils.getStatistique(defaultProps)
    const landAreaTypo = screen.getByTestId("land_area")
    expect(landAreaTypo.innerHTML).toContain(landArea.toString())
  })

  it("should render statistique once json data not exist", async () => {
    const defaultProps = {
      jsonData: undefined,
      controlOptions: {
        coverage: 100,
        floorCount: 5,
        floorHeight: 2,
      },
    }
    render(<StatistiquePanel {...defaultProps} />)
    const landAreaTypo = screen.getByTestId("land_area")
    expect(landAreaTypo.innerHTML).toContain("0")
  })
})
