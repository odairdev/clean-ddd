import { describe, it, expect, beforeEach } from "vitest";
import { AnswerQuestionUseCase } from "./answerQuestion";

let sut: AnswerQuestionUseCase;

describe("Answer Question Use Case", () => {
  beforeEach(() => {
    sut = new AnswerQuestionUseCase();
  });

  it("should be able create an answer for a question.", async () => {
    const answer = await sut.execute({
      authorId: "1",
      questionId: "1",
      content: "Creating answer",
    });

    expect(answer.content).toEqual("Creating answer");
  });
});
