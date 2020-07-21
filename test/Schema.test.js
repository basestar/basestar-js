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

test('create namespace', () => {

    const schema = "{\"AssetObject\":{\"type\":\"object\",\"properties\":{\"bucket\":{\"type\":\"string\"},\"location\":{\"type\":\"Location\"},\"isSourceObject\":{\"type\":\"boolean\"},\"asset\":{\"type\":\"Asset\"},\"currentState\":{\"type\":\"string\"},\"events\":{\"type\":{\"array\":\"ProcessingEvent\"}}},\"indexes\":{\"asset\":{\"partition\":[\"asset.id\"]}},\"expand\":[\"asset\",\"asset.source\",\"location\",\"location.owner\"]},\"Asset\":{\"type\":\"object\",\"properties\":{\"originalFileName\":{\"type\":\"string\"},\"schemaVersion\":{\"type\":\"string\"},\"source\":{\"type\":\"Organization\"},\"tags\":{\"type\":{\"array\":\"string\"}},\"derivatives\":{\"type\":{\"array\":\"Asset\"}},\"size\":{\"type\":\"integer\",\"required\":true,\"immutable\":true},\"derivedFrom\":{\"type\":\"Asset\"},\"etag\":{\"type\":\"string\"},\"state\":{\"type\":\"FileState\"},\"compression\":{\"type\":\"CompressionType\"},\"fileFormat\":{\"type\":\"FileFormat\"},\"fileType\":{\"type\":\"FileType\"}},\"indexes\":{\"source\":{\"partition\":[\"source.id\"]}},\"links\":{\"assetObjects\":{\"schema\":\"AssetObject\",\"expression\":\"this.id == asset.id\"}}},\"Hello\":{\"type\":\"object\"},\"ProcessingEvent\":{\"type\":\"struct\",\"properties\":{\"dateTime\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"ok\":{\"type\":\"boolean\"}}},\"FileState\":{\"type\":\"enum\",\"values\":[\"ACKNOWLEDGED\",\"IDENTIFIED\",\"RECEIVED\",\"REGISTERED\",\"VALIDATED\"]},\"FileFormat\":{\"type\":\"enum\",\"values\":[\"CISAC_EDI\",\"DDEX_FLATFILE\",\"DDEX_XSD\",\"UNKNOWN\"]},\"FileType\":{\"type\":\"enum\",\"values\":[\"CCID\",\"CRD\",\"DSR\",\"UNKNOWN\"]},\"CompressionType\":{\"type\":\"enum\",\"values\":[\"BZ\",\"BZ2\",\"GZ\",\"LZO\",\"RAR\",\"TAR\",\"NONE\",\"UNKNOWN\",\"ZIP\",\"_7Z\"]},\"LocationType\":{\"type\":\"enum\",\"values\":[\"EXTERNAL_DELIVERY\",\"EXTERNAL_SOURCE\",\"INBOX\",\"OUTBOX\",\"REFERENCE_COPY\"]},\"Location\":{\"type\":\"struct\",\"properties\":{\"bucket\":{\"type\":\"string\"},\"owner\":{\"type\":\"Organization\"},\"expectedFileType\":{\"type\":\"FileType\"},\"expectedFileFormat\":{\"type\":\"FileFormat\"},\"expectedCompression\":{\"type\":\"CompressionType\"},\"serverType\":{\"type\":\"ServerType\"},\"locationType\":{\"type\":\"LocationType\"},\"assetObjects\":{\"type\":{\"array\":\"AssetObject\"}},\"rootPath\":{\"type\":\"string\"}}},\"Organization\":{\"type\":\"object\",\"properties\":{\"organizationType\":{\"type\":\"OrganizationType\"},\"name\":{\"type\":\"string\"},\"locations\":{\"type\":{\"array\":\"Location\"}}},\"links\":{\"assets\":{\"schema\":\"Asset\",\"expression\":\"source.id == this.id\"}}},\"OrganizationType\":{\"type\":\"enum\",\"values\":[\"DSP\",\"SERVICE_PROVIDER\",\"SOCIETY\"]},\"ServerType\":{\"type\":\"enum\",\"values\":[\"NFS_FILE_SERVER\",\"SMB_FILE_SERVER\",\"S3\",\"SFTP\"]}}";

    const namespace = JSON.parse(schema);

    Object.entries(namespace).forEach(entry => {
        const name = entry[0];
        const config = entry[1];
        const schema = basestar.Schema.from(config);
        console.log(schema);
    });
})