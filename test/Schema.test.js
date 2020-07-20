const basestar = require("../dist/index");

test('create Schema', () => {

    const schema = basestar.Schema.from({
        type: "object",
        properties: {
            name: {
                type: "string"
            },
            names: {
                type: {
                    array: "string"
                }
            }
        }
    });

    expect(schema instanceof basestar.ObjectSchema).toBeTruthy();
    expect(Object.keys(schema.properties).length).toBe(2);
    expect(schema.properties.name.type instanceof basestar.UseString).toBeTruthy();
    expect(schema.properties.names.type instanceof basestar.UseArray).toBeTruthy();
    expect(schema.properties.names.type.type instanceof basestar.UseString).toBeTruthy();
});