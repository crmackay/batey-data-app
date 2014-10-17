{"batey_info": [{"id":0, "name": "Copey", "division": "Higueral", "gps_coordinates":[18.589149, -69.037397], "gps_polygon": [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]},{"id":1, "name": "Lechuga", "division": "Lechuga", "gps_coordinates":[35.45, 68.95], "gps_polygon": null}]}


###python example on how to parse JSON

import json

test = 'json string'

decoded = json.loads(test)

item_1 = decoded[1]

coordinates_1 = item_1['gps_coordinates']