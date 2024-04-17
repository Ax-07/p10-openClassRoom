import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
   beforeEach(() => {
    render(<Home />);
  });
  it("a list of events is displayed", async () => {
    const events = screen.getByTestId("event-list-testid");
    expect(events).toBeInTheDocument(); 
    events.querySelectorAll(".EventCard").forEach((event) => {
      expect(event).toBeInTheDocument();
    });
  });
  it("a list a people is displayed", () => {
    const people = screen.getByTestId("people-list-testid");
    expect(people).toBeInTheDocument();
    const peopleCards = people.querySelectorAll(".PeopleCard");
    expect(peopleCards.length).toBeGreaterThan(0);
  })
  it("a footer is displayed", () => {
    const footer = screen.getByTestId("footer-testid");
    expect(footer).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", async () => {
    const lastEvent = screen.getByTestId("last-event-testid");
    expect(lastEvent).toBeInTheDocument();
  })
});
