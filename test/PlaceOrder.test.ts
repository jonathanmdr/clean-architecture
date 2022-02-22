import PlaceOrder from "../src/application/usecase/PlaceOrder";
import CouponRepositoryInMemory from "../src/infrastructure/repository/memory/CouponRepositoryInMemory";
import ItemRepositoryInMemory from "../src/infrastructure/repository/memory/ItemRepositoryInMemory";
import OrderRepositoryInMemory from "../src/infrastructure/repository/memory/OrderRepositoryInMemory";


test("Deve fazer um pedido", function() {
    const itemRepository = new ItemRepositoryInMemory();
    const orderRepository = new OrderRepositoryInMemory();
    const couponRepository = new CouponRepositoryInMemory();
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const input = {
        cpf: "935.411.347-80",
        orderItems: [
            {
                idItem: 1,
                quantity: 1
            },
            {
                idItem: 2,
                quantity: 1
            },
            {
                idItem: 3,
                quantity: 3
            }
        ],
        coupon: "VALE20"
    };
    const output = placeOrder.execute(input);
    expect(output.total).toBe(4872);
});