/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import StatistiquePanel from "../StatistiquePanel"
import * as utils from "../../utils"
import { sourceData } from "../../test-utils/fixture"
import {
  TEST_ID_LAND_AREA_LABEL,
  TEST_ID_STATISTIQUE_PANEL,
} from "../../constants/StatistiquePanel"

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
    const panel = screen.getByTestId(TEST_ID_STATISTIQUE_PANEL)
    expect(panel).toBeInTheDocument()
    const { landArea } = utils.getStatistique(defaultProps)
    const landAreaTypo = screen.getByTestId(TEST_ID_LAND_AREA_LABEL)
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
    const landAreaTypo = screen.getByTestId(TEST_ID_LAND_AREA_LABEL)
    expect(landAreaTypo.innerHTML).toContain("0")
  })
})
