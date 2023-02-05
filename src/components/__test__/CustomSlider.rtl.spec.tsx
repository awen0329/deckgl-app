/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TEST_ID_INPUT_CONTROLLER, TEST_ID_SLIDER_CONTROLLER } from "../../constants/CustomSlider"
import CustomSlider from "../CustomSlider"

const onChangeSpy = jest.fn()

describe("Custom Slider", () => {
  it("renders custom slider correctly with label", async () => {
    const defaultProps = {
      label: "Plot coverage %",
      value: "",
      onChange: onChangeSpy,
    }
    render(<CustomSlider {...defaultProps} />)
    expect(screen.getByText("Plot coverage %")).toBeVisible()
  })

  it("should call onChange prop when input number is positive", async () => {
    const defaultProps = {
      label: "Plot coverage %",
      value: 10,
      onChange: onChangeSpy,
    }
    render(<CustomSlider {...defaultProps} />)
    const inputEl = screen.getByTestId(TEST_ID_INPUT_CONTROLLER)
    const input = inputEl.getElementsByTagName("input")[0]
    await userEvent.type(input, "10")
    expect(onChangeSpy).toHaveBeenCalled()
  })

  it("should call onChange prop with 0 when no input number", async () => {
    const defaultProps = {
      label: "Plot coverage %",
      value: 0,
      onChange: onChangeSpy,
    }
    render(<CustomSlider {...defaultProps} />)
    const inputEl = screen.getByTestId(TEST_ID_INPUT_CONTROLLER)
    const input = inputEl.getElementsByTagName("input")[0]
    await fireEvent.input(input, { target: { value: "" } })
    expect(onChangeSpy).toHaveBeenCalled()
  })

  it("should call onChange prop when input field blur with number smaller than 0", async () => {
    const defaultProps = {
      label: "Plot coverage %",
      value: -1,
      onChange: onChangeSpy,
    }
    render(<CustomSlider {...defaultProps} />)
    const inputEl = screen.getByTestId(TEST_ID_INPUT_CONTROLLER)
    const input = inputEl.getElementsByTagName("input")[0]
    fireEvent.blur(input)
    expect(onChangeSpy).toHaveBeenCalled()
  })

  it("should call onChange prop when input field blur with number smaller than 0", async () => {
    const defaultProps = {
      label: "Plot coverage %",
      value: 101,
      onChange: onChangeSpy,
    }
    render(<CustomSlider {...defaultProps} />)
    const inputEl = screen.getByTestId(TEST_ID_INPUT_CONTROLLER)
    const input = inputEl.getElementsByTagName("input")[0]
    fireEvent.blur(input)
    expect(onChangeSpy).toHaveBeenCalled()
  })

  it("shouldn't call onChange prop when input field blur with number in 0 - 100 range", async () => {
    const defaultProps = {
      label: "Plot coverage %",
      value: 50,
      onChange: onChangeSpy,
    }
    render(<CustomSlider {...defaultProps} />)
    const inputEl = screen.getByTestId(TEST_ID_INPUT_CONTROLLER)
    const input = inputEl.getElementsByTagName("input")[0]
    fireEvent.blur(input)
    expect(onChangeSpy).not.toHaveBeenCalled()
  })

  it("should call onChange prop when slider change", async () => {
    const defaultProps = {
      label: "Plot coverage %",
      value: 10,
      onChange: onChangeSpy,
    }
    render(<CustomSlider {...defaultProps} />)
    const sliderEl = screen.getByTestId(TEST_ID_SLIDER_CONTROLLER)
    expect(sliderEl).toBeInTheDocument()
    await fireEvent.mouseDown(sliderEl, { clientX: 162, clientY: 302 })
    expect(onChangeSpy).toHaveBeenCalled()
  })
})
