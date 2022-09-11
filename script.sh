echo '\n\n requesting all heroes'
curl localhost:3000/heroes


echo '\n\n requesting all flash'
curl localhost:3000/heroes/1

echo '\n\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{"invalid": "data"}' \
    localhost:3000/heroes

echo '\n\ncreating Chapolin '
CREATE=$(curl --silent -X POST \
    --data-binary '{"name": "Chapolin", "age: 50", "power": "Strength"}' \
    localhost:3000/heroes)

echo $CREATE 