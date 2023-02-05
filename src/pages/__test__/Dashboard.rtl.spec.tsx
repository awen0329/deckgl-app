/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// @ts-nocheck
import { act, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Dashboard from "../Dashboard"
import { sourceData } from "../../test-utils/fixture"
import { TEST_ID_LOAD_GEOJSON_BUTTON } from "../../constants/Dashboard"
import { TEST_ID_INPUT_CONTROLLER } from "../../constants/CustomSlider"

describe("Dashboard", () => {
  beforeEach(async () => {
    render(<Dashboard />)
  })

  it("should load file once there is a file", async () => {
    const fileData = JSON.stringify(sourceData)
    jest.spyOn(global, "FileReader").mockImplementation(function () {
      this.readAsText = jest.fn(() => {
        this.result = fileData
      })
    })
    const file = new File([fileData], "geojson.geojson", {
      type: "application/geo+json",
    })
    const uploadBtn = screen.getByTestId(TEST_ID_LOAD_GEOJSON_BUTTON)
    const input = uploadBtn.getElementsByTagName("input")[0]
    await userEvent.upload(input, [file])

    expect(FileReader).toHaveBeenCalledTimes(1)

    const reader = FileReader.mock.instances[0]

    expect(reader.readAsText).toHaveBeenCalledTimes(1)
    expect(reader.readAsText).toHaveBeenCalledWith(file)
    expect(reader.onload).toEqual(expect.any(Function))

    await act(() => reader.onload())
  })

  it("should not load geo-json when there is no file", async () => {
    const uploadBtn = screen.getByTestId(TEST_ID_LOAD_GEOJSON_BUTTON)
    const input = uploadBtn.getElementsByTagName("input")[0]
    await fireEvent.change(input, { target: { files: null } })

    expect(FileReader).toHaveBeenCalledTimes(1)

    const reader = FileReader.mock.instances[0]

    expect(reader.readAsText).toBeUndefined()
  })

  it("should not load geo-json when there is no text in a file", async () => {
    const fileData = ""
    jest.spyOn(global, "FileReader").mockImplementation(function () {
      this.readAsText = jest.fn(() => {
        this.result = fileData
      })
    })
    const file = new File([fileData], "geojson.geojson", {
      type: "application/geo+json",
    })
    const uploadBtn = screen.getByTestId(TEST_ID_LOAD_GEOJSON_BUTTON)
    const input = uploadBtn.getElementsByTagName("input")[0]
    await userEvent.upload(input, [file])

    expect(FileReader).toHaveBeenCalledTimes(1)

    const reader = FileReader.mock.instances[0]

    expect(reader.readAsText).toHaveBeenCalledTimes(1)
    expect(reader.readAsText).toHaveBeenCalledWith(file)
    expect(reader.onload).toEqual(expect.any(Function))

    await act(() => reader.onload())
  })

  it("should update controlOptions", async () => {
    const customSliderInput = screen.getAllByTestId(TEST_ID_INPUT_CONTROLLER)[0]
    expect(customSliderInput).not.toBeNull()
    const input = customSliderInput.getElementsByTagName("input")[0]
    expect(input).not.toBeNull()
    await userEvent.type(input, "10")
  })
})
