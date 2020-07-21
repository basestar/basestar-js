const basestar = require("../dist/index");

test('create object Schema', () => {

    const schema = basestar.Schema.from({
        properties: {
            name: {
                type: "string"
            },
            names: {
                type: {
                    array: "string"
                }
            },
            named: {
                type: "Named"
            }
        }
    });

    expect(schema instanceof basestar.ObjectSchema).toBeTruthy();
    expect(Object.keys(schema.properties).length).toBe(3);
    expect(schema.properties.name.type instanceof basestar.UseString).toBeTruthy();
    expect(schema.properties.names.type instanceof basestar.UseArray).toBeTruthy();
    expect(schema.properties.names.type.type instanceof basestar.UseString).toBeTruthy();
    expect(schema.properties.named.type instanceof basestar.UseNamed).toBeTruthy();
    expect(schema.properties.named.type.name).toBe("Named");
});


test('create view Schema', () => {

    const schema = basestar.Schema.from({
        type: "view",
        group: [
          "name"
        ],
        materialized: true,
        properties: {
            ok: {
                type: "boolean"
            },
            values: {
                type: {
                    map: "integer"
                }
            }
        }
    });

    expect(schema instanceof basestar.ViewSchema).toBeTruthy();
    expect(Object.keys(schema.properties).length).toBe(2);
    expect(schema.materialized).toBeTruthy();
    expect(schema.properties.ok.type instanceof basestar.UseBoolean).toBeTruthy();
    expect(schema.properties.values.type instanceof basestar.UseMap).toBeTruthy();
    expect(schema.properties.values.type.type instanceof basestar.UseInteger).toBeTruthy();
});

test('create enum Schema', () => {

    const schema = basestar.Schema.from({
        type: "enum",
        values: [
            "HELLO",
            "GOODBYE"
        ]
    });

    expect(schema instanceof basestar.EnumSchema).toBeTruthy();
    expect(Object.keys(schema.values).length).toBe(2);
});
