import pandas as pd

def parse_csv_file(file_obj):
    df = pd.read_csv(file_obj)

    # Standard columns expected
    required = ["Equipment Name", "Type", "Flowrate", "Pressure", "Temperature"]

    for col in required:
        if col not in df.columns:
            raise ValueError(f"Missing column: {col}")

    # Clean numeric columns
    for col in ["Flowrate", "Pressure", "Temperature"]:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    total_rows = len(df)
    valid_rows = df.dropna().shape[0]
    missing_values = df.isna().sum().sum()
    invalid_entries = total_rows - valid_rows

    averages = {
        "Flowrate": round(df["Flowrate"].mean(), 3),
        "Pressure": round(df["Pressure"].mean(), 3),
        "Temperature": round(df["Temperature"].mean(), 3),
    }

    type_distribution = df["Type"].value_counts().to_dict()

    return {
        "total_rows": total_rows,
        "valid_rows": valid_rows,
        "missing_values": int(missing_values),
        "invalid_entries": int(invalid_entries),
        "averages": averages,
        "type_distribution": type_distribution,
    }, df.head(10).to_dict(orient="records")
