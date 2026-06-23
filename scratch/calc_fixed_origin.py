# Calculate new translation values for fixed transform-origin
# Original stages data:
# Stage 1: scale 2.2, translate (0.05%, -1.88%), origin (49.89%, 29.40%)
# Stage 2: scale 2.4, translate (0.00%, -6.89%), origin (50.00%, 41.78%)
# Stage 3: scale 1.6, translate (0.00%, 0.12%),  origin (50.00%, 25.07%)
# Stage 4: scale 1.4, translate (0.00%, 14.06%), origin (50.00%, 5.57%)

stages = [
    {"id": 1, "scale": 2.2, "tx": 0.05,  "ty": -1.88, "ox": 49.89, "oy": 29.40},
    {"id": 2, "scale": 2.4, "tx": 0.00,  "ty": -6.89, "ox": 50.00, "oy": 41.78},
    {"id": 3, "scale": 1.6, "tx": 0.00,  "ty": 0.12,  "ox": 50.00, "oy": 25.07},
    {"id": 4, "scale": 1.4, "tx": 0.00,  "ty": 14.06, "ox": 50.00, "oy": 5.57}
]

# Fixed transform-origin
fixed_ox = 50.00
fixed_oy = 25.00

print("Fixed Origin: {}%, {}%".format(fixed_ox, fixed_oy))
for s in stages:
    scale = s["scale"]
    tx = s["tx"]
    ty = s["ty"]
    ox = s["ox"]
    oy = s["oy"]
    
    # Formula: T'_i = Ti + ((1 - Si)/Si) * (Oi - O)
    new_tx = tx + ((1.0 - scale) / scale) * (ox - fixed_ox)
    new_ty = ty + ((1.0 - scale) / scale) * (oy - fixed_oy)
    
    print("Stage {}: scale({:.2f}) translate({:.4f}%, {:.4f}%)".format(
        s["id"], scale, new_tx, new_ty
    ))
