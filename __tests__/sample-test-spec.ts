describe ('WHEN this sample test runs', () => {
  it('SHOULD return true', () => {
    // Arrange
    const testData: string = 'some data';
    const expected = true;

    // Act
    const actual = testData.includes('a');

    // Assert
    expect(expected).toBe(actual);
  });
});
