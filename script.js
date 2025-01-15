document.getElementById("calculate-btn").addEventListener("click", function () {
    const rooms = parseInt(document.getElementById("rooms").value) || 0;
    const doctors = parseInt(document.getElementById("doctors").value) || 0;
    const cpl = parseInt(document.getElementById("cpl").value) || 0;
    const additionalLocations = parseInt(document.getElementById("additional-locations").value) || 0;
    const noa = parseInt(document.getElementById("noa").value) || 0;

    const setupFeeTable = [99, 129, 129, 159, 159, 199, 199, 199, 299, 499];
    const pricePerRoomTable = [195, 105, 100, 95, 80, 60, 60, 60, 55, 55];

    const setupFee = rooms >= 10 ? setupFeeTable[9] : setupFeeTable[rooms - 1];
    const monthlyPricePerRoom = rooms >= 10 ? pricePerRoomTable[9] : pricePerRoomTable[rooms - 1];
    const monthlyPrice = monthlyPricePerRoom * rooms;

    // Sales commission calculation based on provided formula
    const commissionBase = monthlyPrice;
    const commissionCpl = doctors * (cpl === 17 ? 8 : 6);
    const commissionLocations = additionalLocations * 99;
    const commissionNoa = noa > 0 ? noa * 99 : 0;

    const totalCommission = commissionBase + commissionCpl + commissionLocations + (setupFee / 12) + commissionNoa;

    document.getElementById("monthly-price").textContent = `${monthlyPrice.toFixed(2)} €`;
    document.getElementById("setup-fee").textContent = `${setupFee.toFixed(2)} €`;
    document.getElementById("sales-commissions").textContent = `${totalCommission.toFixed(2)} €`;
});
