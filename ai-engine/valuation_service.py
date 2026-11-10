from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="LandIQ AI Valuation & LandScore Engine")

class ParcelInput(BaseModel.model_config):
    pass

class ParcelData(BaseModel):
    ownership_clarity: int  # 0 to 100
    legal_cleanliness: int  # 0 to 100
    infrastructure: int     # 0 to 100
    climate_suitability: int# 0 to 100
    economic_activity: int  # 0 to 100
    security_index: int     # 0 to 100
    environmental_risk: int # 0 to 100
    base_market_price: float

@app.post("/calculate-score")
def calculate_land_score(data: ParcelData):
    # Weighted formula as defined in your blueprint
    weights = {
        "ownership": 0.25,
        "legal": 0.20,
        "infrastructure": 0.20,
        "climate": 0.15,
        "economic": 0.10,
        "security": 0.05,
        "environment": 0.05
    }
    
    score = (
        (data.ownership_clarity * weights["ownership"]) +
        (data.legal_cleanliness * weights["legal"]) +
        (data.infrastructure * weights["infrastructure"]) +
        (data.climate_suitability * weights["climate"]) +
        (data.economic_activity * weights["economic"]) +
        (data.security_index * weights["security"]) +
        (data.environmental_risk * weights["environment"])
    )
    
    # Calculate estimated price range (±10% spread around base market price adjusted by LandScore)
    multiplier = 0.8 + (score / 250) # Scale factor based on score
    estimated_value = data.base_market_price * multiplier
    low_range = estimated_value * 0.95
    high_range = estimated_value * 1.05

    return {
        "land_score": round(score, 1),
        "valuation_range": {
            "min_kes": round(low_range, -4),
            "max_kes": round(high_range, -4)
        },
        "status": "Success"
    }