function addCard() {
  return (
		<div class="root">
			<div class="app">
			  <h2 class="page-title">&lt; 카드 추가</h2>
				<div class="card-box">
					<div class="empty-card">
						<div class="card-top"></div>
						<div class="card-middle">
							<div class="small-card__chip"></div>
						</div>
						<div class="card-bottom">
							<div class="card-bottom__info">
								<span class="card-text">NAME</span>
								<span class="card-text">MM / YY</span>
							</div>
						</div>
					</div>
				</div>
				<div class="input-container">
					<span class="input-title">카드 번호</span>
					<div class="input-box">
						<input class="input-basic" type="text" />
						<input class="input-basic" type="text" />
						<input class="input-basic" type="password" />
						<input class="input-basic" type="password" />
					</div>
				</div>
				<div class="input-container">
					<span class="input-title">만료일</span>
					<div class="input-box w-50">
						<input class="input-basic" type="text" placeholder="MM" />
						<input class="input-basic" type="text" placeholder="YY" />
					</div>
				</div>
				<div class="input-container">
					<span class="input-title">카드 소유자 이름(선택)</span>
					<input
						type="text"
						class="input-basic"
						placeholder="카드에 표시된 이름과 동일하게 입력하세요."
					/>
				</div>
				<div class="input-container">
					<span class="input-title">보안코드(CVC/CVV)</span>
					<input class="input-basic w-25" type="password" />
				</div>
				<div class="input-container">
					<span class="input-title">카드 비밀번호</span>
					<input class="input-basic w-15" type="password" />
					<input class="input-basic w-15" type="password" />
					<input class="input-basic w-15" type="password" />
					<input class="input-basic w-15" type="password" />
				</div>
				<div class="button-box">
					<span class="button-text">다음</span>
				</div>
			</div>
		</div>
  );
}

export default addCard;
