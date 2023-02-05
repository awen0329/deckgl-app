/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render } from "@testing-library/react"
import WorkPanel from "../WorkPanel"
import { sourceData } from "../../test-utils/fixture"

// This is deckgl and mapbox-gl test and basically they are fully tested by themself inside of them.
describe("WorkPanel", () => {
  it("render map and 3D model in case that all props are set", async () => {
    render(<WorkPanel sourceData={sourceData} height={1} scale={2} floors={3} />)
  })

  it("render map and 3D model in case that all props are not set", async () => {
    render(<WorkPanel />)
  })
})
